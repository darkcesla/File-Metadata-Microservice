#include <iostream>
#include <cmath>

using namespace std;

void input(double &x, double &x1, double &y, double &y1)
{
  cout<<"\nMenghitung jarak Manhattan\n";
  cout<<"\nP1(x1,y1)";
  cout<<"\nMasukkan nilai x1 : ";
  cin>>x;
  cout<<"Masukkan nilai y1 : ";
  cin>>y;
  cout<<"\n\nP2(x2,y2)";
  cout<<"\nMasukkan nilai x2 : ";
  cin>>x1;
  cout<<"Masukkan nilai y2 : ";
  cin>>y1;
}
void manhattan_distance(const double x1, const double x2, const double y1, const double y2)
{
  double distance;
  int x_dif, y_dif;
  x_dif = x2 - x1;
  y_dif = y2 - y1;
  if(x_dif < 0)
    x_dif = -x_dif;
  if(y_dif < 0)
    y_dif = -y_dif;
  distance = x_dif + y_dif;
  cout<<"\n\nJarak Manhattan yang didapatkan diantara P1("<<x1<<","<<x2<<") and P2("<<y1<<","<<y2<<") : "<<distance<<endl;
}

int main(void)
{
  double x1,x2;
  double y1,y2;
  input(x1,x2,y1,y2);
  manhattan_distance(x1,x2,y1,y2);
  return 0;
}
