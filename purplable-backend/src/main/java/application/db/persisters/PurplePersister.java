package application.db.persisters;

import java.sql.Timestamp;

import application.UserDetailsRepository;
import application.VisitInfoRepository;
import application.db.UserDetailsResponse;
import application.db.dals.UserDetails;
import application.db.dals.VisitInfo;

public class PurplePersister {

    private final VisitInfoRepository visitInfoRepository;
    private final UserDetailsRepository userDetailsRepository;

    public PurplePersister(VisitInfoRepository visitInfoRepository, UserDetailsRepository userDetailsRepository) {
        this.visitInfoRepository = visitInfoRepository;
        this.userDetailsRepository = userDetailsRepository;
    }

    public void saveInDb(String fullName, Integer id, String loggedUser) {
        VisitInfo visitInfo = new VisitInfo(id, fullName, loggedUser, new Timestamp(System.currentTimeMillis()));
        insertVisitInfo(visitInfo);
    }

    public VisitInfo insertVisitInfo(VisitInfo visitInfo) {
        return visitInfoRepository.save(visitInfo);
    }

    public UserDetails insertUserDetails(UserDetails userDetails) {
        return userDetailsRepository.save(userDetails);
    }

    public UserDetailsResponse login(UserDetails userDetails) {
        if (userDetails == null) {
            return new UserDetailsResponse("error", "user details returned as null");
        }
        try {
            UserDetails byToken = userDetailsRepository.findByToken(userDetails.getToken());
            if (byToken != null) {
                return new UserDetailsResponse("success", "user already signed up");
            } else {
                insertUserDetails(userDetails);
                return new UserDetailsResponse("success", "signed up a new user: " + userDetails);
            }
        } catch (Exception e) {
            System.out.println(e);
            return new UserDetailsResponse("error", "could not get to db");
        }
    }
}
