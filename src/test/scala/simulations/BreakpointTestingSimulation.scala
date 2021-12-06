package simulations

import base.BaseSimulation
import io.gatling.core.Predef.*
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef.*

class BreakpointTestingSimulation extends BaseSimulation {
  def GetAirline(): ChainBuilder =
    exec(
      http("GET airline by id request")
        .get(s"/airlines/1")
        .check(status.is(200))
    )

  val scn = scenario("Breakpoint Testing scenario")
    .exec(GetAirline())

  setUp(
    scn.inject(
      rampUsersPerSec(5).to(10).during(5),
      nothingFor(5),
      rampUsersPerSec(10).to(15).during(5),
      nothingFor(5),
      rampUsersPerSec(15).to(20).during(5)
    ).protocols(httpConf)
  )
}
