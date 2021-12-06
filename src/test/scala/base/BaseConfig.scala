package base

import io.gatling.core.Predef.*
import io.gatling.http.Predef.*

class BaseSimulation extends Simulation {
  val httpConf = http
    .baseUrl("https://api.instantwebtools.net/v1")
    .header("Accept", "application/json")
}
