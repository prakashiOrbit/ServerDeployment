package com.dml.application.Ui.Fragment;

import android.content.Context;
import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;

import com.dml.application.R;
import com.dml.application.Utils.Backpressedlistener;

public class HomeFragment extends Fragment implements Backpressedlistener{

    LinearLayout Veg_layout,LayoutFruit,LayoutMeat;


public static HomeFragment baseKeyListener;
    @Override

    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_home, container, false);
        Veg_layout=view.findViewById(R.id.layout_veg);
        LayoutFruit =view.findViewById(R.id.layout_fruit);
//        LayoutMeat = view.findViewById(R.id.layout_meat);

       callCategory();

        return view;

    }

    @Override
    public void onAttach(@NonNull Context context) {
        super.onAttach(context);
        if (context instanceof AppCompatActivity){
            ((AppCompatActivity) context).getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        }
    }

    @Override
    public void onDetach() {
        super.onDetach();

        if ( getActivity() instanceof AppCompatActivity){
            ((AppCompatActivity) getActivity()).getSupportActionBar().setDisplayHomeAsUpEnabled(false);
        }
    }

    private void callCategory() {

        LayoutFruit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Bundle bundle = new Bundle();
                bundle.putString("key","1");

               ProductFragment productFragment=new ProductFragment();
                FragmentManager fragmentManager=getFragmentManager();
                FragmentTransaction fragmentTransaction=fragmentManager.beginTransaction();
                productFragment.setArguments(bundle);

                fragmentTransaction.replace(R.id.frame_layout,productFragment);
                // Remove the fragment

                fragmentTransaction.commitNow();



            }
        });

        Veg_layout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Bundle bundle = new Bundle();
                bundle.putString("key","2");

                ProductFragment productFragment=new ProductFragment();
                FragmentManager fragmentManager=getFragmentManager();
                FragmentTransaction fragmentTransaction=fragmentManager.beginTransaction();
                productFragment.setArguments(bundle);
                fragmentTransaction.replace(R.id.frame_layout,productFragment);
                fragmentTransaction.commitNow();

            }
        });

//        LayoutMeat.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
//
//                Bundle bundle = new Bundle();
//                bundle.putString("key","3");
//
//                ProductFragment productFragment=new ProductFragment();
//                FragmentManager fragmentManager=getFragmentManager();
//                FragmentTransaction fragmentTransaction=fragmentManager.beginTransaction();
//                productFragment.setArguments(bundle);
//                fragmentTransaction.replace(R.id.frame_layout,productFragment);
//                fragmentTransaction.commitNow();
//
//            }
//        });

    }


    @Override
    public void onBackPressed() {

    }
}
