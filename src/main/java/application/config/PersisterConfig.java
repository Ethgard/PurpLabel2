package application.config;

import application.VisitInfoRepository;
import application.db.persisters.PurplePersister;

import java.time.Clock;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PersisterConfig {

    @Bean
    PurplePersister purplePersister(VisitInfoRepository repository) {
        return new PurplePersister(repository);
    }

    @Bean
    public Clock getUTCClock() {
        return Clock.systemUTC();
    }


}
