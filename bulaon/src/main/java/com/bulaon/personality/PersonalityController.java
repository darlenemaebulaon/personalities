package com.bulaon.personality;

import com.bulaon.personality.Personality;
import com.bulaon.personality.PersonalityRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bulaon/personalities")
@CrossOrigin(origins = "*")
public class PersonalityController {

    @Autowired
    private PersonalityRepository repository;

    @GetMapping
    public List<Personality> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public Personality create(@RequestBody Personality p) {
        return repository.save(p);
    }

    @PostMapping("/bulk")
    public ResponseEntity<?> savePersonalities(@RequestBody List<Personality> personalities) {
        try {
            return ResponseEntity.ok(repository.saveAll(personalities));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving personalities: " + e.getMessage());
        }
    }

}
