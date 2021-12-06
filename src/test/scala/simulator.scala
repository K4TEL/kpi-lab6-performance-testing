import io.gatling.app.Gatling
import io.gatling.core.config.GatlingPropertiesBuilder
import simulations.*

import scala.language.postfixOps

@main def simulate(): Unit =
  val simulation = new GatlingPropertiesBuilder()

  val classNames = List(//classOf[LoadTestingSimulation].getName,
    //classOf[SpikeTestingSimulation].getName,
    //classOf[SoakTestingSimulation].getName,
    classOf[BreakpointTestingSimulation].getName
  )

  classNames.foreach(s =>
    simulation.simulationClass(s)
    Gatling.fromMap(simulation.build)
  )

