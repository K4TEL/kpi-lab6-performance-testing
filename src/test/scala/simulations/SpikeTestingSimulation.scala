package simulations

import base.BaseSimulation
import io.gatling.core.Predef.*
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef.*

class SpikeTestingSimulation extends BaseSimulation {
  def GetAllAirlines(): ChainBuilder =
    exec(
      http("GET all airlines")
        .get(s"/airlines")
        .check(status.is(200))
    )
  
  val scn: ScenarioBuilder = scenario("Spike Testing scenario")
    .exec(GetAllAirlines())
  
  setUp(scn.inject(
    atOnceUsers(8))
    .protocols(httpConf))
}
