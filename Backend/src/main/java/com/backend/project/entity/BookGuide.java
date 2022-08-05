package com.backend.project.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="bookedguides")
public class BookGuide {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;
    @Column(name="guideId")
    int bookedGuideId;
    @Column(name = "bookGuidePrice")
    int price;
    @Column(name = "guideName")
    String guideName;
    @Column(name = "noOfDays")
    int noOfDays;

    public BookGuide(){
        super();
    }

    public BookGuide(int id, int bookedGuideId, int price, String guideName, int noOfDays){
        this.id = id;
        this.bookedGuideId = bookedGuideId;
        this.guideName = guideName;
        this.noOfDays = noOfDays;
        this.price = price;
    }

    public int getId(){
        return this.id;
    }

    public void setId(int id){
        this.id = id;
    }

    public void setBookedGuideId(int bookedGuideId){
        this.bookedGuideId = bookedGuideId;
    }

    public int getBookedGuideId(){
        return this.bookedGuideId;
    }

    public void setPrice(int price){
        this.price = price;
    }

    public int getPrice(){
        return this.price;
    }

    public void setGuideName(String guideName){
        this.guideName = guideName;
    }

    public String getGuideName(){
        return this.guideName;
    }

    public void setNoOfDays(int noOfDays){
        this.noOfDays = noOfDays;
    }

    public int getNoOfDays(){
        return this.noOfDays;
    }
}
