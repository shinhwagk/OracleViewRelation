package controllers

import play.api.mvc._

/**
  * Created by zhangxu on 2016/11/17.
  */
class Application extends Controller {
  def index = Action { implicit request =>
    Ok(views.html.index("a"))
  }

  def parameter(name: String) = Action { implicit request =>
    Ok(views.html.item.parameter(name))
  }

  def dataDictionaryView(name: String) = Action { implicit request =>
    Ok(views.html.item.datadictionaryview(name))
  }

  def dynamicPerformanceView(name: String) = Action { implicit request =>
    Ok(views.html.item.datadictionaryview(name))
  }

  def event(name: String) = Action { implicit request =>
    Ok(views.html.item.datadictionaryview(name))
  }
}