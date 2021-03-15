package edu.uniandes.resource;

import io.swagger.annotations.Info;
import io.swagger.annotations.SwaggerDefinition;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

/**
 * @author christian
 * @project faker
 */


@SwaggerDefinition(info = @Info(title = "UNIANDES-FAKER", version = "1.0.0"))
@ApplicationPath("/")
public class FakerApplication extends Application {
}
