// Entry point for static files: just move them all to the destination folder, Webpack
//
// index.html
import 'file-loader?name=[name].[ext]!./index.html'

// Images with subfolders
require.context('file-loader?name=[path][name].[ext]&context=./app/frontend/static/images/!./', true, /\.(?!js$|html$).{2,5}$/);

// Stylesheets
import 'uikit/dist/css/uikit.min.css'
