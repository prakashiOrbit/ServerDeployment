package com.dml.application.Ui.Fragment;

import static android.view.View.*;

import android.annotation.SuppressLint;
import android.graphics.Paint;
import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.dml.application.Database.DataBaseDAO;
import com.dml.application.Database.Roomdatabase;
import com.dml.application.Database.entities.Product;
import com.dml.application.R;
import com.google.android.material.button.MaterialButton;

public class ProductdetailsFragment extends Fragment {

    TextView Product_Name, Product_Quantity, Product_Discription, Product_Rate, Product_Disount;
    MaterialButton ADD_tocart;
    String  ProductName, ProductPrice, ProductQty,ProductDis,ProductId,ProductDiscription;

    Roomdatabase database;
    DataBaseDAO dataBaseDAO;


    @SuppressLint("MissingInflatedId")
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {



                View view = inflater.inflate(R.layout.fragment_productdetails, container, false);
        Product_Name = view.findViewById(R.id.product_name);
        Product_Quantity =view. findViewById(R.id.product_qty);
        Product_Rate=view.findViewById(R.id.product_price);
        ADD_tocart=view.findViewById(R.id.add_tocart);
        Product_Discription =view. findViewById(R.id.product_Discription);
       Product_Disount=view.findViewById(R.id.pdproduct_discount);

       // initview();
        Bundle bundle = this.getArguments();
        if(bundle != null){
            ProductId=bundle.getString("pid");
            ProductName=bundle.getString("pname");
            ProductQty=bundle.getString("pquant");
            ProductDis=bundle.getString("pidis");
            ProductPrice=bundle.getString("proprice");
            ProductDiscription=bundle.getString("pdiscription");
        }
        Product_Name.setText(ProductName);
        Product_Quantity.setText(ProductQty);
        Product_Discription.setText(ProductDis);
        Product_Rate.setText(ProductPrice);
        Product_Disount.setText(ProductDis);
        Product_Disount.setPaintFlags(Product_Disount.getPaintFlags() | Paint.STRIKE_THRU_TEXT_FLAG);
        Product_Discription.setText(ProductDiscription);
        database = Roomdatabase.getInstance(getActivity());
        dataBaseDAO = database.dataBaseDAO();


       ADD_tocart.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View view) {
                Product product = new Product(0,ProductId,ProductName,"1",ProductPrice,ProductDis,ProductQty);
                dataBaseDAO.insert(product);
                Toast.makeText(getActivity()    ,"Added to cart",Toast.LENGTH_SHORT).show();
            }
        });





        return view;



    }

//    private void initview() {
//        Product_Name.setText(ProductName);
//        ADD_tocart =getView().findViewById(R.id.add_tocart);

    }



