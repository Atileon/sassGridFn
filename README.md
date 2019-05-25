# Grid Function for

---

A simple function to handle custom grid trying to avoid bootstrap if there's only need of grid

> This function could be extended/modified

## Use

Just declare on your sass rule the columns as follow:

```sass
.element{
    /**
    * $param number= number of columns;
    * $param viewport = Viewport could be :lg,md,sm;
    * $param scope = if columns are into container(another 12 columns) set 'in'
    *                   otherwise don't declare anything;
    **/

    width: columns(number,viewport,scope);
}
```
