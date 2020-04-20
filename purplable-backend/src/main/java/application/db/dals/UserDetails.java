package application.db.dals;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(schema = "purplable", name = "user_details")
@NoArgsConstructor
public class UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String email;
    @Getter
    private String token;
    private String image;
    @Column(name="provider_name")
    private String providerName;

    public UserDetails(String name, String email, String token, String image, String providerName) {
        this.name = name;
        this.email = email;
        this.token = token;
        this.image = image;
        this.providerName = providerName;
    }
}
