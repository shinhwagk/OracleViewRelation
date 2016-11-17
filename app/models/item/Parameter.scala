package models.item

/**
  * Created by zhangxu on 2016/11/17.
  */
case class Parameter(RelatedViews: Option[Array[String]],
                     Note: Option[Array[String]],
                     See_Also: Option[Array[String]],
                     Structure: Option[Array[Array[String]]],
                     Property: Property)

case class Property(Parameter_Type: Option[String] = None,
                    Default_Value: Option[String] = None,
                    Modifiable: Option[String] = None,
                    Modifiable_In_A_PDB: Option[String] = None,
                    Range_Of_Values: Option[String] = None,
                    Basic: Option[String] = None,
                    Oracle_RAC: Option[String] = None)