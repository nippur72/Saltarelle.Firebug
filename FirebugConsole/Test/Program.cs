using System;
using System.Html;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Html.Media.Graphics;
using Firebug;

public class Program
{
   static void Main()
   {
      //Window.AttachEvent("onload", OnLoaded);
      OnLoaded();
   }
        
   static void OnLoaded()
   {            
      //Console.Clear();
      console.Assert(3>4,"3 is not > 4");
      for(int t=0;t<3;t++)
      {
         console.Count("times counted");            
      }            
      console.Debug("this is a debug message");
      console.Dir(Document.GetElementById("mybut"));
      console.DirXml(Document.GetElementById("mybut"));            
      //console.Exception("Exception");
      console.Group("group with 3 items");
      console.Debug("hello 1");
      console.Debug("hello 2");
      console.Debug("hello 3");
      console.GroupEnd();
      console.GroupCollapsed("group collapsed with 3 items");
      console.Debug("hello 1");
      console.Debug("hello 2");
      console.Debug("hello 3");
      console.GroupEnd();
      console.Log("this is a log message");
      console.Info("this is an info");            
      console.Warn("this is a warning");
      console.Error("this is an error");
      console.Profile();
      console.ProfileEnd();
      console.Trace("trace");
      console.Time("time");
      console.TimeEnd("time end");
      console.TimeStamp("timestamp");
      //console.Table(Document.GetElementById("mybut"));
   }            
}

