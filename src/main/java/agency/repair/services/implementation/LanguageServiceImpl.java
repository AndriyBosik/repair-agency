package agency.repair.services.implementation;

import agency.repair.entities.Language;
import agency.repair.repositories.LanguageRepository;
import agency.repair.services.abstraction.LanguageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LanguageServiceImpl implements LanguageService {
    @Autowired
    private LanguageRepository languageRepository;

    @Override
    public List<Language> getAll() {
        return languageRepository.findAll();
    }
}
