package application.db;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
public class UserDetailsResponse {
    @Getter
    private String status;
    @Getter
    private String message;
}
