package es.uji.geoapis.testnashorn.turf;


import org.apache.commons.io.IOUtils;
import org.junit.Before;
import org.junit.Test;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.io.InputStreamReader;

/**
 * Unit test for simple App.
 */
public class AppTest {

    ScriptEngine engine;

    @Test
    public void testCenter() throws Exception {
        ((Invocable) engine).invokeFunction("centerFn");
    }

    @Before
    public void setUp() throws Exception {
        String resource = "test.js";
        String src = IOUtils.toString(new InputStreamReader(App.class.getClassLoader().getResourceAsStream(resource)));
        engine = new ScriptEngineManager().getEngineByName("nashorn");
        engine.eval(src);

    }

    @Test
    public void testArray() throws ScriptException, NoSuchMethodException {
        ((Invocable) engine).invokeFunction("arraysTest");
    }

    @Test
    public void testAlong() throws ScriptException, NoSuchMethodException {
        ((Invocable) engine).invokeFunction("alongFn");
    }

    @Test
    public void testArea() throws ScriptException, NoSuchMethodException {
        ((Invocable) engine).invokeFunction("areaFn");
    }

    @Test
    public void testSimplify() throws ScriptException, NoSuchMethodException {
        ((Invocable) engine).invokeFunction("simplifyFn");
    }

}
