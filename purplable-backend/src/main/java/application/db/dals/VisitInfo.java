package application.db.dals;

import lombok.NoArgsConstructor;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(schema = "purplable", name = "visit_info")
public class VisitInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name="person_id")
    private int personId;
    @Column(name="full_name")
    private String fullName;
    @Column(name="logged_user")
    private String loggedUser;
    @Column(name="timestamp")
    private Timestamp timestamp;

    public VisitInfo(int personId, String fullName, String loggedUser, Timestamp timestamp) {
        this.personId = personId;
        this.fullName = fullName;
        this.loggedUser = loggedUser;
        this.timestamp = timestamp;
    }

}
