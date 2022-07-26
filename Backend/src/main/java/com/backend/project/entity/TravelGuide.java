package com.backend.project.entity;

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
    String guideLevel;
    @Column(name = "GuideAge")
    String age;

    public TravelGuide(){
        super();
    }
    
    public TravelGuide(int guideId, String guideName, String guideLevel, String age){
        this.age = age;
        this.guideLevel = guideLevel;
        this.guideName = guideName;
    }

    public void setGuideId(int guideId){
        this.guideId = guideId;
    }

    public int getGuideId(){
        return this.guideId;
    }

    public void setGuideLevel(String guideLevel){
        this.guideLevel = guideLevel;
    }

    public String getGuideLevel(){
        return this.guideLevel;
    }

    public void setAge(String age){
        this.age = age;
    }

    public String getAge(){
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
