package application.config;

import application.UserDetailsRepository;
import application.VisitInfoRepository;
import application.db.persisters.PurplePersister;

import java.time.Clock;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PersisterConfig {

    @Bean
    PurplePersister purplePersister(VisitInfoRepository repository, UserDetailsRepository userDetailsRepository) {
        return new PurplePersister(repository, userDetailsRepository);
    }

    @Bean
    public Clock getUTCClock() {
        return Clock.systemUTC();
    }


}
