import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;

@WebServlet("/FoodServlet")
public class FoodServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        int pizza = Integer.parseInt(request.getParameter("pizza"));
        int burger = Integer.parseInt(request.getParameter("burger"));
        int sandwich = Integer.parseInt(request.getParameter("sandwich"));
        int coke = Integer.parseInt(request.getParameter("coke"));

        int total = pizza*200 + burger*100 + sandwich*80 + coke*50;

        out.println("<h2>Total Bill: ₹" + total + "</h2>");
    }
}