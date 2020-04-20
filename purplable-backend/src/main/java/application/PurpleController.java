package application;

import application.db.persisters.PurplePersister;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(Routes.MAIN)
public class PurpleController {

    private final PurplePersister purplePersister;

    public PurpleController(PurplePersister purplePersister) {
        this.purplePersister = purplePersister;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = Routes.DB_SAVE, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public void sendToDb(@RequestParam("name") String fullName,
                         @RequestParam(value = "id") Integer id,
                         @RequestParam(value = "loggedUser", required = false) String loggedUser) {
        purplePersister.saveInDb(fullName, id, loggedUser);
    }
}
