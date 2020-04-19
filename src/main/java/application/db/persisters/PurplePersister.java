package application.db.persisters;

import java.sql.Timestamp;

import application.VisitInfoRepository;
import application.db.dals.VisitInfo;

public class PurplePersister {

    private final VisitInfoRepository repository;

    public PurplePersister(VisitInfoRepository repository) {
        this.repository = repository;
    }

    public void saveInDb(String fullName, Integer id, String loggedUser) {
        VisitInfo visitInfo = new VisitInfo(id, fullName, loggedUser, new Timestamp(System.currentTimeMillis()));
        save(visitInfo);
    }

    public VisitInfo save(VisitInfo searchInfo) {
        return repository.save(searchInfo);
    }
}
