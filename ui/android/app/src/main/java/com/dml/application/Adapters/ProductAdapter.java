package com.dml.application.Adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.cardview.widget.CardView;
import androidx.recyclerview.widget.RecyclerView;

import com.dml.application.Models.ProductModel;
import com.dml.application.R;

import java.util.List;

public class ProductAdapter  extends RecyclerView.Adapter<ProductAdapter.ViewHolder> {

    public interface OnItemClickListener {
        void onItemClick(ProductModel item);
    }

    private final List<ProductModel> items;
    private final OnItemClickListener listener;

    public ProductAdapter(List<ProductModel> items, OnItemClickListener listener) {
        this.items = items;
        this.listener = listener;
    }

    @Override public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.product_single_row_view, parent, false);
        return new ViewHolder(v);
    }

    @Override public void onBindViewHolder(ViewHolder holder, int position) {
        holder.bind(items.get(position), listener);

    }

    @Override public int getItemCount() {
        return items.size();
    }

    static class ViewHolder extends RecyclerView.ViewHolder {

        ImageView ProductImage;
        TextView ProductName,ProductQty,ProductPrice,ProductDisPrice;
        CardView Single_Product;
        private Context context;

        public ViewHolder(View itemView) {
            super(itemView);
            ProductImage = itemView.findViewById(R.id.product_img);
            ProductName = itemView.findViewById(R.id.product_name);
            ProductQty = itemView.findViewById(R.id.product_qty);
            ProductPrice = itemView.findViewById(R.id.product_price);
            ProductDisPrice = itemView.findViewById(R.id.product_dis_price);
            Single_Product = itemView.findViewById(R.id.single_product);
        }

        public void bind(final ProductModel item, final OnItemClickListener listener) {
            ProductName.setText(item.getProductName());
            ProductQty.setText(item.getProductqty());
           ProductPrice.setText("₹" + item.getProductPrice());
//           ProductPrice.setPaintFlags(item.getProductPrice() );
          ProductDisPrice.setText("₹" + item.getProductDisPrice());
           ProductImage.setImageResource(item.getProductImage());
//            if (item.getImage() != null) {
//                String Image = item.getImage();
//                Picasso.with(context).load(Image).fit().into(cat_image);
//            }

            Single_Product.setOnClickListener(new View.OnClickListener() {
                @Override public void onClick(View v) {
                    listener.onItemClick(item);
                }
            });
        }
    }
}
