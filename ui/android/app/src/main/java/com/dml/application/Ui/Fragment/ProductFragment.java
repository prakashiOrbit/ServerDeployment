package com.dml.application.Ui.Fragment;

import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;
import androidx.recyclerview.widget.RecyclerView;
import androidx.recyclerview.widget.StaggeredGridLayoutManager;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.dml.application.Adapters.ProductAdapter;
import com.dml.application.Models.ProductModel;
import com.dml.application.R;
import com.dml.application.Ui.Fragment.ProductdetailsFragment;

import java.util.ArrayList;
import java.util.List;

public class ProductFragment extends Fragment {
    TextView TextCatName;
    int id;
    String KEY;
    RecyclerView RecyclerviewProductList;
    List<ProductModel> productModels;
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        View view = inflater.inflate(R.layout.fragment_product, container, false);
        TextCatName =view.findViewById(R.id.text_catname);
        RecyclerviewProductList = view.findViewById(R.id.recyclerview_productList);
        RecyclerviewProductList.setHasFixedSize(true);
        RecyclerviewProductList.setLayoutManager(new StaggeredGridLayoutManager(2, StaggeredGridLayoutManager.VERTICAL));

        Bundle bundle = this.getArguments();

        if(bundle != null){

            KEY=bundle.getString("key");
        }

        TextCatName.setText(KEY);
        id= Integer.parseInt(KEY);
        CallProducts();

        return view;

    }


    private void CallProducts() {
        if (id == 1) {
            productModels = new ArrayList<>();
            productModels.add(new ProductModel("1", "Apple", "7 piece",
                    "₹8", "₹75", "@string/discripation", R.drawable.apple));
            productModels.add(new ProductModel("2", "Avacado", "7 piece",
                    "8", "75", "@string/discripation", R.drawable.avacado));
            productModels.add(new ProductModel("3", "Banana", "7 piece",
                    "8", "75", "@string/discripation", R.drawable.banana));
            productModels.add(new ProductModel("4", "Grape", "7 piece",
                    "8", "75", "@string/discripation", R.drawable.grape));
            productModels.add(new ProductModel("5", "Mango", "7 piece",
                    "8", "75", "@string/discripation", R.drawable.mango));
            productModels.add(new ProductModel("6", "Orange", "1 KG",
                    "35", "25", "@string/discripation", R.drawable.orange));
            productModels.add(new ProductModel("7", "Papaya", "1 KG",
                    "35", "25", "@string/discripation", R.drawable.papaya));
            productModels.add(new ProductModel("8", "Pineapple", "1 KG",
                    "35", "25", "@string/discripation", R.drawable.pineapple));
            productModels.add(new ProductModel("9", "Pineapple", "1 KG",
                    "₹5", "25", "@string/discripation", R.drawable.pineapple));
            productModels.add(new ProductModel("10", "Pomegranate", "1 KG",
                    "35", "25", "@string/discripation", R.drawable.pomegranate));
            productModels.add(new ProductModel("11", "Strawberry", "1 KG",
                    "35", "25", "@string/discripation", R.drawable.strawberry));
            TextCatName.setText("Fruits");
            RecyclerviewProductList.setAdapter(new ProductAdapter(productModels, new ProductAdapter.OnItemClickListener() {
                @Override
                public void onItemClick(ProductModel item) {

                    Bundle bundle = new Bundle();

                    bundle.putString("pid", item.getProductId());
                    bundle.putString("pname", item.getProductName());
                    bundle.putString("pquant", item.getProductqty());
                    bundle.putString("pidis", item.getProductDisPrice());
                    bundle.putString("proprice", item.getProductPrice());
                    bundle.putString("pdiscription", item.getProductDiscription());

                    ProductdetailsFragment productdetailsFragment=new ProductdetailsFragment();
                    FragmentManager fragmentManager=getFragmentManager();
                    FragmentTransaction fragmentTransaction=fragmentManager.beginTransaction();
                    productdetailsFragment.setArguments(bundle);
                    fragmentTransaction.replace(R.id.frame_layout,productdetailsFragment);
                    fragmentTransaction.commitNow();


                }
            }));

        } else if (id == 2) {
            productModels = new ArrayList<>();
            productModels.add(new ProductModel("1", "Beans", "1 KG", "35",
                    "25", "hjshdjh", R.drawable.beans));
            productModels.add(new ProductModel("2", "Broccoli", "1 KG", "8",
                    "5", "cgjsjs", R.drawable.brocoli));
            productModels.add(new ProductModel("3", "Carrot", "1 KG", "35",
                    "25", "hggsga", R.drawable.carrot));
            productModels.add(new ProductModel("4", "Capsicum", "1 KG", "35",
                    "25", "jsjsaj", R.drawable.capcicum));
            productModels.add(new ProductModel("5", "Chilli", "1 KG", "35",
                    "25", "bxbsx", R.drawable.chilli));
            productModels.add(new ProductModel("5", "Coriander Leaves", "1 KG", "35",
                    "25", "bxbsx", R.drawable.corieanderleaf));
            productModels.add(new ProductModel("6", "Onion", "1 KG", "35",
                    "25", "hjhds", R.drawable.onion));
            productModels.add(new ProductModel("7", "Pumpkin", "1 KG", "35",
                    "25", "dghjsaghda", R.drawable.pumpkin));
            productModels.add(new ProductModel("8+", "Potato", "1 KG", "35",
                    "25", "dghjsaghda", R.drawable.potato));
            productModels.add(new ProductModel("9", "Sweet Corn", "1 KG", "35",
                    "25", "dghjsaghda", R.drawable.sweetcorn));



            TextCatName.setText("Vegtables");
            RecyclerviewProductList.setAdapter(new ProductAdapter(productModels, new ProductAdapter.OnItemClickListener() {
                @Override
                public void onItemClick(ProductModel item) {
                    Bundle bundle = new Bundle();
                    bundle.putString("pid", item.getProductId());
                    bundle.putString("pname", item.getProductName());
                    bundle.putString("pquant", item.getProductqty());
                    bundle.putString("pidis", item.getProductDisPrice());
                    bundle.putString("proprice", item.getProductPrice());
                    bundle.putString("pdiscription", item.getProductDiscription());

                    ProductdetailsFragment productdetailsFragment=new ProductdetailsFragment();
                    FragmentManager fragmentManager=getFragmentManager();
                    FragmentTransaction fragmentTransaction=fragmentManager.beginTransaction();
                    productdetailsFragment.setArguments(bundle);
                    fragmentTransaction.replace(R.id.frame_layout,productdetailsFragment);
                    fragmentTransaction.commitNow();


                }
            }));
        } else {
            productModels = new ArrayList<>();
            productModels.add(new ProductModel("1", "Chicken", "1 KG", "35", "25", "HDHASDSAKD", R.drawable.onion));
            productModels.add(new ProductModel("2", "Mutton", "1 KG", "8", "5", "HHSS", R.drawable.onion));
            productModels.add(new ProductModel("3", "Beef", "1 KG", "35", "25", "BSKJHS", R.drawable.onion));


            TextCatName.setText("Meats and Eggs");
            RecyclerviewProductList.setAdapter(new ProductAdapter(productModels, new ProductAdapter.OnItemClickListener() {
                @Override
                public void onItemClick(ProductModel item) {



                    Bundle bundle = new Bundle();
                    bundle.putString("pid", item.getProductId());
                    bundle.putString("pname", item.getProductName());
                    bundle.putString("pquant", item.getProductqty());
                    bundle.putString("pidis", item.getProductDisPrice());
                    bundle.putString("proprice", item.getProductPrice());
                    bundle.putString("pdiscription", item.getProductDiscription());

                    ProductdetailsFragment productdetailsFragment=new ProductdetailsFragment();
                    FragmentManager fragmentManager=getFragmentManager();
                    FragmentTransaction fragmentTransaction=fragmentManager.beginTransaction();
                    productdetailsFragment.setArguments(bundle);
                    fragmentTransaction.replace(R.id.frame_layout,productdetailsFragment);
                    fragmentTransaction.commitNow();




                }
            }));
        }
    }
}
