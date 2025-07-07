package com.example.saptcodevalidator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.info.BuildProperties;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class VersionController {

    @Autowired
    private BuildProperties buildProperties;

    @GetMapping("/version")
    public String getVersion() {
        return buildProperties.getVersion();
    }
}
