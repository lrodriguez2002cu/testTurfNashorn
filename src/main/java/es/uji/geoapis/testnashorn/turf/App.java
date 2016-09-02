package es.uji.geoapis.testnashorn.turf;

import org.apache.commons.io.IOUtils;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.io.IOException;
import java.io.InputStreamReader;


public class App 
{
    public static void main( String[] args ) throws NoSuchMethodException {
        try {
            String resource = "test.js";
            String src= IOUtils.toString(new InputStreamReader(App.class.getClassLoader().getResourceAsStream(resource)));
            ScriptEngine engine = new ScriptEngineManager().getEngineByName("nashorn");
            engine.eval(src);

            ((Invocable)engine).invokeFunction("arraysTest");


            ((Invocable)engine).invokeFunction("centerFn");


        } catch (ScriptException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }


    }
}
