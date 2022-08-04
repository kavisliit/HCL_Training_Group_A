package com.backend.project.entity;

import java.util.ArrayList;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "travelguide")
public class TravelGuide {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int guideId;

    @Column(name = "GuideName")
    String guideName;
    @Column(name = "GuideLevel")
    int guideLevel;
    @Column(name = "GuideAge")
    int age;
    @Column(name="GuideLanguages")
    public ArrayList<String> languages;
    @Column(name="GuideImage")
    String guideImage;

    public TravelGuide(){
        super();
    }
    
    public TravelGuide(int guideId, String guideName, int guideLevel, int age, ArrayList<String> languages, String guideImage){
        this.age = age;
        this.guideLevel = guideLevel;
        this.guideName = guideName;
        this.languages = languages;
        this.guideImage = guideImage;
    }

    public void setGuideImage(String guideImage){
        this.guideImage = guideImage;
    }

    public String getGuideImage(){
        return this.guideImage;
    }

    public void setLanguages(ArrayList<String> languages){
        this.languages = languages;
    }

    public ArrayList<String> getLanguages(){
        return this.languages;
    }

    public void setGuideId(int guideId){
        this.guideId = guideId;
    }

    public int getGuideId(){
        return this.guideId;
    }

    public void setGuideLevel(int guideLevel){
        this.guideLevel = guideLevel;
    }

    public int getGuideLevel(){
        return this.guideLevel;
    }

    public void setAge(int age){
        this.age = age;
    }

    public int getAge(){
        return this.age;
    }

    public void setGuideName(String guideName){
        this.guideName = guideName;
    }

    public String getGuideName(){
        return this.guideName;
    }

    @Override
    public String toString() {
        return "TravelGuide [guideId=" + guideId + ", guideName=" + guideName + ", guideLevel=" + guideLevel + ", age=" + age + "]";
    }
}
