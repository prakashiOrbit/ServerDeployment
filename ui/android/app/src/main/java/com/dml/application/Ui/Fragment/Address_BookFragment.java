package com.dml.application.Ui.Fragment;

import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.dml.application.R;
import com.dml.application.Ui.Fragment.Location_confirmationFragment;
import com.google.android.material.button.MaterialButton;


public class Address_BookFragment extends Fragment {


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_address__book, container, false);
        MaterialButton materialButton=(MaterialButton)view.findViewById(R.id.createnew_address);

        materialButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                    Location_confirmationFragment location_confirmationFragment=new Location_confirmationFragment();
                    FragmentManager fragmentManager=getFragmentManager();
                    FragmentTransaction fragmentTransaction=fragmentManager.beginTransaction();
                    fragmentTransaction.replace(R.id.frame_layout,location_confirmationFragment);
                    fragmentTransaction.commitNow();


                }
            });

        return view;

    }

}