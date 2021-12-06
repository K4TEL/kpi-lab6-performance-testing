package simulations

import base.BaseSimulation
import io.gatling.core.Predef.*
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef.*

class LoadTestingSimulation extends BaseSimulation{
  def GetAirline(): ChainBuilder =
    exec(
      http("GET airline by id request")
      .get(s"/airlines/1")
      .check(status.is(200))
    )
    
  val scn: ScenarioBuilder = scenario("Get single airline by id")
      .exec(GetAirline())

  setUp(scn.inject(
    rampUsers(40) during 5)
    .protocols(httpConf))
}
