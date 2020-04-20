package application;

import org.springframework.context.annotation.Bean;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import application.db.UserDetailsResponse;
import application.db.dals.UserDetails;
import application.db.persisters.PurplePersister;

@RestController
@RequestMapping(Routes.MAIN)
public class PurpleController {

    private final PurplePersister purplePersister;

    public PurpleController(PurplePersister purplePersister) {
        this.purplePersister = purplePersister;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = Routes.DB_SAVE, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public void sendToDb(@RequestParam("name") String fullName,
                         @RequestParam(value = "id") Integer id,
                         @RequestParam(value = "loggedUser", required = false) String loggedUser) {
        purplePersister.saveInDb(fullName, id, loggedUser);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = Routes.LOGIN, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public UserDetailsResponse login(@RequestBody UserDetails userDetails) {
        System.out.println("hi");
        return purplePersister.login(userDetails);
    }

}
