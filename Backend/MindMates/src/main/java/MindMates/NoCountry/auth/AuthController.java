package MindMates.NoCountry.auth;

import MindMates.NoCountry.user.UserAuthService;
import MindMates.NoCountry.user.UserEntity;
import MindMates.NoCountry.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private UserAuthService authService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/registrar")
    public ResponseEntity<AuthenticationResponse> registrar(@RequestBody UserEntity usuarioRequest) {
        return ResponseEntity.ok(authService.registrar(usuarioRequest));
    }


    @PostMapping("/autenticar")
    public ResponseEntity<AuthenticationResponse> autenticar(@RequestBody UserEntity usuarioRequest) {
        return ResponseEntity.ok(authService.autenticar(usuarioRequest));
    }

    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@RequestBody LoginDTO loginDTO) {
        UserEntity usuario = userRepository.findByCorreo(loginDTO.email()).orElseThrow();
        if (Objects.equals(loginDTO.password(), usuario.getPassword())) {
            return ResponseEntity.ok(true);
        } else {
            return ResponseEntity.ok(false);
        }
    }
}
