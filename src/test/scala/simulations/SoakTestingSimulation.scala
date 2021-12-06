package simulations

import base.BaseSimulation
import io.gatling.core.Predef.*
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef.*
import net.sf.saxon.expr.JPConverter.FromString

class SoakTestingSimulation extends BaseSimulation{
  def GetPassenger(): ChainBuilder =
    exec(
      http("GET passenger by id request")
        .get(s"/passenger/1")
        .check(status.is(204))
    )

  val scn: ScenarioBuilder = scenario("Soak Testing scenario")
    .exec(GetPassenger())

  setUp(
    scn.inject(
      constantConcurrentUsers(10).during(10)
    ).protocols(httpConf)
  )
}
