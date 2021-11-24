import java.util.Date;
import java.awt.*;

class Main{
    public static void main(String[] args){ 
    byte age = 30;
    int temp = 20;
    int myAge = 30;
    int herAge = myAge-5;
    long viewsCount = 123_456_778_9L;
    float price = 10.99f;
    char letter = 'a';
    boolean isright = true;
    System.out.println(herAge);
    System.out.println(viewsCount);
    System.out.println(price);

    // complex refrence type
    Date now = new Date();
    System.out.println(now);
    //now.getTime()


    // når bruke primitiv og når reference memory lagring
        byte x = 1;
        byte y = x; 
        x = 2;
        System.out.println(y);
        Point point1 = new Point(1,1);
        Point point2 = point1;
        point1.x = 2;
        System.out.println(point2);

        // prøver noe nå
        System.out.println(" \n");
        String msg = ("kkkokoo \t hello world  \"HEI HEI\" ...");
        System.out.println(msg.endsWith("!"));
        System.out.println(msg.length());
        System.out.println(msg.trim());
        System.out.println(msg.replace("w", "s"));
        System.out.println(msg);// kan ikke muteres er fortsatt samme !!!

    
    }
}
// å bruke byte istedenfor int sparer bites.