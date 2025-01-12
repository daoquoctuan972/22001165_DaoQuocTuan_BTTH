package model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import java.util.Set;

@Entity
@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Table(name="groups")
public class Group {
    @Id
    @EqualsAndHashCode.Include
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "group_id")
    private int id;
    @Column(columnDefinition = "varchar(45)",unique = true,nullable = true)
    private  String name;
    @ManyToMany(mappedBy = "groups")
    @ToString.Exclude
    private Set<User> users;
}
