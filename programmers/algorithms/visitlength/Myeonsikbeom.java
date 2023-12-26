/*https://school.programmers.co.kr/learn/courses/30/lessons/49994#*/
import java.util.*;
class Point{
    private int fromX;
    private int fromY;
    private int toX;
    private int toY;

    public Point(int fromX, int fromY, int toX, int toY) {
        this.fromX = fromX;
        this.fromY = fromY;
        this.toX = toX;
        this.toY = toY;
    }

    public int getFromX() {
        return fromX;
    }

    public void setFromX(int fromX) {
        this.fromX = fromX;
    }

    public int getFromY() {
        return fromY;
    }

    public void setFromY(int fromY) {
        this.fromY = fromY;
    }

    public int getToX() {
        return toX;
    }

    public void setToX(int toX) {
        this.toX = toX;
    }

    public int getToY() {
        return toY;
    }

    public void setToY(int toY) {
        this.toY = toY;
    }


    @Override
    public boolean equals(Object o) {
        if(this == o){
            return true;
        }
        if(!(o instanceof Point)){
            return false;
        }
        Point p = (Point)o;
        return (p.fromX == fromX && p.fromY == fromY && p.toX == toX && p.toY == toY)
                || (fromX == p.toX && fromY == p.toY && toX == p.fromX && toY == p.fromY);
    }
    @Override
    public int hashCode() {
        return Objects.hash(toY, toX, fromY, fromX) + Objects.hash(fromY, fromX, toY, toX);
    }
}
class Solution {

    public int solution(String dirs) {
        int answer = 0;
        int len = dirs.length();
        int x=0,y=0;
        Set<Point> set = new HashSet<>();
        for(int i=0;i<dirs.length();i++){
            char c = dirs.charAt(i);
            int prevx = x,prevy = y;
            if(c == 'U'){
                y+=1;
                if(y > 5){
                    y=5;
                    continue;
                }
            }else if(c == 'R'){
                x+=1;
                if(x > 5){
                    x=5;
                    continue;
                }
            }else if(c == 'D'){
                y-=1;
                if(Math.abs(y) > 5){
                    y=-5;
                    continue;
                }
            }else if(c == 'L'){
                x-=1;
                if(Math.abs(x) > 5){
                    x=-5;
                    continue;
                }
            }
            set.add(new Point(prevx,prevy,x,y));
            answer++;

        }
        return set.size();
    }
}