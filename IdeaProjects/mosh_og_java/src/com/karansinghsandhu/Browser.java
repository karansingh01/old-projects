package com.karansinghsandhu;

public class Browser {
    public void navigate(String adress){
        String ip = findIpAdress(adress);
        String html = sendHtmlAdress(ip);
        System.out.println(html);
    }

    private String sendHtmlAdress(String ip) {
        return "<html>dd<html>";
    }

    private String findIpAdress(String adress) {
        return "123.3.3.5";
    }

    public static void main(String[] args) {
        var browser = new Browser();
        browser.navigate("skkrt");
    }



}
