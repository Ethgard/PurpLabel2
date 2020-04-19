package application.db.dals;

import lombok.NoArgsConstructor;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(schema = "wiser", name = "search_row")
@NoArgsConstructor
public class VisitInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private int personId;
    private String fullName;
    private String loggedUser;
    private Timestamp timestamp;

    public VisitInfo(int personId, String fullName, String loggedUser, Timestamp timestamp) {
        this.personId = personId;
        this.fullName = fullName;
        this.loggedUser = loggedUser;
        this.timestamp = timestamp;
    }

}
