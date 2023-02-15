package com.dml.application.Ui.Fragment;

import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;

import com.dml.application.R;

public class HomeFragment extends Fragment {

    LinearLayout Veg_layout,LayoutFruit,LayoutMeat;





    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_home, container, false);
        Veg_layout=view.findViewById(R.id.layout_veg);
        LayoutFruit =view.findViewById(R.id.layout_fruit);
        LayoutMeat = view.findViewById(R.id.layout_meat);





        callCategory();

        return view;

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

        LayoutMeat.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Bundle bundle = new Bundle();
                bundle.putString("key","3");

                ProductFragment productFragment=new ProductFragment();
                FragmentManager fragmentManager=getFragmentManager();
                FragmentTransaction fragmentTransaction=fragmentManager.beginTransaction();
                productFragment.setArguments(bundle);
                fragmentTransaction.replace(R.id.frame_layout,productFragment);
                fragmentTransaction.commitNow();

            }
        });

    }


}