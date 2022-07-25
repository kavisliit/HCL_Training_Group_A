package com.backend.project.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.core.io.ClassPathResource;
import org.springframework.util.StreamUtils;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FileController {
    @RequestMapping(value = "/image/{pic}", method = RequestMethod.GET, produces = MediaType.IMAGE_JPEG_VALUE)

    public void getImage(HttpServletResponse response, @PathVariable String pic) throws IOException {

        ClassPathResource imgFile = new ClassPathResource("uploads/" + pic);

        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(imgFile.getInputStream(), response.getOutputStream());
    }
}
