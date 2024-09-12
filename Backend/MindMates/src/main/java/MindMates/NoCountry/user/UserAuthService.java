package MindMates.NoCountry.user;

import MindMates.NoCountry.auth.AuthenticationResponse;
import MindMates.NoCountry.auth.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserAuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Autowired
    public UserAuthService(
            UserRepository usuarioRepository,PasswordEncoder passwordEncoder,
            JwtService jwtService, AuthenticationManager authenticationManager
    ) {
        this.userRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    @Transactional
    public AuthenticationResponse registrar(UserEntity usuario) {
        usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));
        usuario.setRole(UserRolesEnum.USER);
        userRepository.save(usuario);
        String token = jwtService.generateToken(usuario);
        return new AuthenticationResponse(token);
    }

    public AuthenticationResponse autenticar(UserEntity usuario) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        usuario.getCorreo(),
                        usuario.getPassword()
                )
        ); // Throws exception if user and password are not correct
        UserEntity authenticatedUser = userRepository.findByCorreo(usuario.getCorreo()).orElseThrow();
        String token = jwtService.generateToken(authenticatedUser);
        return new AuthenticationResponse(token);
    }
}