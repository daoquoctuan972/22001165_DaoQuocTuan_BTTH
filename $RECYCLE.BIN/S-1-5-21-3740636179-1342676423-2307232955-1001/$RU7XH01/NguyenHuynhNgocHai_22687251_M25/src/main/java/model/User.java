package model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import java.util.Set;

@Entity
@Table(name = "users")
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Data
public class User {
    @EqualsAndHashCode.Include
    @Id
    @Column(name="user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(columnDefinition = "varchar(45)",unique = true,nullable = true)
    private String username;
    @Column(columnDefinition = "varchar(45)",unique = true,nullable = true)
    private String password;
    @Column(columnDefinition = "varchar(45)",unique = true,nullable = true)
    private String email;
    @ManyToMany
    @JoinTable(name="users_groups",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "group_id"))
    @ToString.Exclude
    private Set<Group> groups;
}
