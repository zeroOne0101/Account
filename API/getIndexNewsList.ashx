<%@ WebHandler Language="C#" Class="getIndexNewsList" %>

using System;
using System.Web;
using System.Text;
using System.Data.SqlClient;
using BookDAL;
using System.Collections;
using System.Collections.Generic;
using Newtonsoft.Json;

public class getIndexNewsList : IHttpHandler
{

  public void ProcessRequest(HttpContext context)
  {
    var list = new List<Dictionary<string, object>>();
    //int version=Int32.Parse(context.Request.Form["strWhere"].ToString());
    //SqlParameter[] sp = new SqlParameter[]{
      //new SqlParameter("@version",version)
    //};

    using (SqlDataReader dr = SqlHelper.ExecuteReader(SqlHelper.GetConnSting(), "getAccountData",null ))
    {
      while (dr.Read())
      {
        Dictionary<string, object> item = new Dictionary<string, object>();
        for (int i = 0; i < dr.FieldCount; i++)
        {
          string name = dr.GetName(i).ToString();
          string value = dr.GetValue(i).ToString();
          item.Add(name, value);
        }
        list.Add(item);
      }
    }

    if (list.Count > 0)
    {
      string json = JsonConvert.SerializeObject(list);
      context.Response.Write(json);
    }
    else
    {
      context.Response.Write("{\"code\":-1}");
    }
    
  }

  public bool IsReusable
  {
    get
    {
      return false;
    }
  }

}