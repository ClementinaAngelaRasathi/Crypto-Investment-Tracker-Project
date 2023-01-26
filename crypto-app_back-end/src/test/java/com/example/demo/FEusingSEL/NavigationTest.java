package com.example.demo.FEusingSEL;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.Test;

public class NavigationTest {

	public static WebDriver driver;

	@Test
	public void navigationWPTest() {
		
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\cleme\\Desktop\\ClassWorkout\\Selenium\\chromedriver.exe");
	driver=new ChromeDriver();
	driver.get("http://localhost:3000");
	System.out.println("Launch Crypto Gallery");
	
//	To maximize the driver window
	driver.manage().window().maximize();
	driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	
	WebElement LoginNav = driver.findElement(By.xpath("/html/body/div/div/div/div[1]/div[2]/div/ul/ul[2]/a"));
	LoginNav.click();
	driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);


	
	String Loginpageurl = driver.getCurrentUrl();
	
	String actualLoginpageUrl = "http://localhost:3000/login";
	
	Assert.assertEquals(Loginpageurl, actualLoginpageUrl);

	WebElement userName = driver.findElement(By.xpath("//input[@id='floatingInput']"));
//	searchBox.click();
	userName.clear();
	userName.sendKeys("Agnes56@gmail.com");
	
	WebElement password = driver.findElement(By.xpath("//input[@id='floatingPassword']"));
//	searchBox.click();
	password.clear();
	password.sendKeys("Root@12345");
	
	WebElement LoginButton = driver.findElement(By.xpath("//form/div[3]/button[1]"));
	LoginButton.click();
	
//	String alertText = driver.switchTo().alert().getText();
//	Assert.assertEquals(alertText, "login success. Navigating to dashboard...");
//	driver.switchTo().alert().accept();
	
	WebElement DashboardHeading = driver.findElement(By.xpath("/html/body/div/div/div/div[1]/h4"));
	
	Assert.assertEquals(DashboardHeading.getText(), "Live Updates on all Cryptos! Dive inside and explore!!");
	driver.close();
	
	}
	
}
