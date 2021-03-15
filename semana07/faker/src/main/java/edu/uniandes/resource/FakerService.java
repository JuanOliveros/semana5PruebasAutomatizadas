package edu.uniandes.resource;

import com.github.javafaker.Faker;
import io.swagger.annotations.Api;

import javax.annotation.PostConstruct;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

/**
 * @author christian
 * @project faker
 */

@Path("faker")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@Api(tags = "Faker data generator PODAM")
public class FakerService {

    private Faker faker;

    @PostConstruct
    public void init() {
        faker = new Faker(new Locale("es"));
    }

    @GET
    @Path("integration-data")
    public Response getListdata() {
        ArrayList list = new ArrayList<String>();
        for (int i = 0; i <= 50; i++) {
            list.add(faker.hacker().abbreviation());
        }
        return Response.ok(list).build();
    }

    @GET
    @Path("emails-data")
    public Response getRandomName() {
        ArrayList list = new ArrayList<String>();
        for (int i = 0; i <= 50; i++) {
            list.add(faker.internet().emailAddress());
        }
        return Response.ok(list).build();
    }
}
