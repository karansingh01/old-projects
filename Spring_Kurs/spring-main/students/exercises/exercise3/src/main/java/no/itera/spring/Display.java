package no.itera.spring;

import org.springframework.stereotype.Service;

@Service
/**
 * Simple output handler
 *
 * Used only for demonstration purposes :P
 */
public class Display {
  public void output(String value) {
    System.out.println(value);
  }
}
