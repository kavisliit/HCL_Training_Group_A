package com.backend.project.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "vehicle")
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column
    private String type;
    @Column
    private String brand;
    @Column
    private String location;
    @Column
    private String vnumber;
    @Column
    private int capacity;
    @Column
    private int price;
    @Column
    private String ac;
    @Column
    private String babyseat;
    @Column
    private String fridge;
    @Column
    private String food;
    @Column
    private String music;
    @Column
    private String driver_name;
    @Column
    private String driver_number;
    @Column
    private String mimage;
    @Column
    private String fimage;
    @Column
    private String bimage;
    @Column
    private String iimage;
    @Column
    private String model;

    public Vehicle() {
        this.price = 0;
        this.capacity = 0;
    }

    public Vehicle(int id, String type, String brand, String location, String vnumber, int capacity, String ac,
            String babyseat, String fridge, String food, String music, String driver_name, String driver_number,
            String mimage, String fimage, String bimage, String iimage) {
        this.id = id;
        this.type = type;
        this.brand = brand;
        this.location = location;
        this.vnumber = vnumber;
        this.capacity = capacity;
        this.ac = ac;
        this.babyseat = babyseat;
        this.fridge = fridge;
        this.food = food;
        this.music = music;
        this.driver_name = driver_name;
        this.driver_number = driver_number;
        this.mimage = mimage;
        this.fimage = fimage;
        this.bimage = bimage;
        this.iimage = iimage;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getVnumber() {
        return vnumber;
    }

    public void setVnumber(String vnumber) {
        this.vnumber = vnumber;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public String getAc() {
        return ac;
    }

    public void setAc(String ac) {
        this.ac = ac;
    }

    public String getBabyseat() {
        return babyseat;
    }

    public void setBabyseat(String babyseat) {
        this.babyseat = babyseat;
    }

    public String getFridge() {
        return fridge;
    }

    public void setFridge(String fridge) {
        this.fridge = fridge;
    }

    public String getFood() {
        return food;
    }

    public void setFood(String food) {
        this.food = food;
    }

    public String getMusic() {
        return music;
    }

    public void setMusic(String music) {
        this.music = music;
    }

    public String getDriver_name() {
        return driver_name;
    }

    public void setDriver_name(String driver_name) {
        this.driver_name = driver_name;
    }

    public String getDriver_number() {
        return driver_number;
    }

    public void setDriver_number(String driver_number) {
        this.driver_number = driver_number;
    }

    public String getMimage() {
        return mimage;
    }

    public void setMimage(String mimage) {
        this.mimage = mimage;
    }

    public String getFimage() {
        return fimage;
    }

    public void setFimage(String fimage) {
        this.fimage = fimage;
    }

    public String getBimage() {
        return bimage;
    }

    public void setBimage(String bimage) {
        this.bimage = bimage;
    }

    public String getIimage() {
        return iimage;
    }

    public void setIimage(String iimage) {
        this.iimage = iimage;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

}
