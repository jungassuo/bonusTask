package com.example.BonusTask;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
public class EmployeeController {

    @Autowired
    EmployeeService service;


    @PostMapping("/upload")
    public  String uploadData(@RequestParam("file")MultipartFile file, RedirectAttributes redirectAttributes)throws  Exception{

        List<Employee> List = new ArrayList<>();
        BufferedReader br;
        List<String> result = new ArrayList<>();
        try {

            String line;
            InputStream is = file.getInputStream();
            br = new BufferedReader(new InputStreamReader(is));
            while ((line = br.readLine()) != null) {
                result.add(line);
            }

        } catch (IOException e) {
            System.err.println(e.getMessage());
        }

        for(int i = 1; i < result.size();i++){
            Employee temp = new Employee();

            String[] arei = result.get(i).split(",");
            temp.setMail(arei[0]);
            temp.setFullName(arei[1]);
            temp.setPhoneNumber(arei[2]);
            List.add(temp);
        }
        service.employeeRepository.saveAll(List);

        return Integer.toString(List.size());
    }
    @GetMapping("/data")
    private List getAllEmployees() {
        return service.getAllEmployees();
    }
}
