class index {
    public static void main(String[] args) {
        String s1 = "soft123";

        int sum = 0;
        char[] n = s1.toCharArray();
        for (int i = 0; i < n.length; i++) {
            if (n[i] >= '0' && n[i] <= '9')
                sum += Integer.parseInt(String.valueOf(n[i]));
        }

        System.out.println(sum);
    }
}
