# Agenda

1. Motivation
2. How it works
3. Simulation + Demo
4. Q&A


<details>
<summary>Motivation</summary>

- help find out the "bad" commit very quick
- very easy to use, yet powerful tool but not many people know

</details>

<details>
<summary>How it works</summary>

base on `binary search` algorithm:
- input:
    - param 1: `A = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]`
    - param 2: `x = 17`
- output: is there an x in A?

    <details>
    <summary>solution:</summary>

    - step 1:
        - median of A = 20 / 2 = 10
        - A[10] = 10;

    - step 2:
        - comparison: A[10] <= x then ignore A[0..10]
        - A = [11, 12, 13, 14, 15, 16, 17, 18, 19]

    - step 3:
        - median of A = 9 / 2 = 4
        - A[4] = 15

    - step 4:
        - comparison: A[4] <= x then ignore A[0..4]
        - A = [16, 17, 18, 19]

    - step 5:
        - median of A = 4/2 = 2
        - A[2] = 18

    - step 6:
        - comparison: A[2] >= x then ignore A[2..]
        - A = [16, 17]

    - step 7:
        - median of A = 2/2 = 1
        - A[1] = 17

    - step 8:
        - comparison: A[1] == x then DONE!
    </details>

    <details>
    <summary>Apply to git</summary>

    ### Preparation step

    ```
                                                    HEAD
                                                    ||
                                                    ||
                                                    \/
    ----o----o----o----x----o----o----o----o----o----o--->

       [0    1    2    3    4    5    6    7    8    9]
    ```

    Let git know the boundary:
    - at the present (commitHash = 9) the feature is not working => it's bad!
    - I know that at commitHash = 0, the feature was still working => it's good!

    => good commitHash = 0 and bad commitHash = 9

    => the commit boundary = [0..9]

    notes:
    - `good` means the first half does not contain bad commit => git will ignore them all. `bad` means otherwise.
    - median after `good` = length / 2
    - median after `bad` = length / 2 - 1

    ### Bisecting
    ```
                           HEAD
                           ||
                           ||
                           \/
    ----o----o----o----x----o----o----o----o----o----o--->

       [0    1    2    3    4    5    6    7    8    9]
    ```
    - git will checkout the (median - 1) commit
    - verify, it's bad
    - commit boundary narrows down to [0, 1, 2, 3, 4]


    ```
            HEAD
            ||
            ||
            \/
    ----o----o----o----x----o

       [0    1    2    3    4]
    ```
    - git will checkout the (median - 1) commit
    - verify it's good
    - commit boundary narrows down to [2, 3, 4]


    ```
            HEAD
            ||
            ||
            \/
    ----o----x----o

       [2    3    4]
    ```
    - git will checkout the median commit
    - verify it's bad
    - commit boundary narrows down to [2, 3]


    ```
       HEAD
       ||
       ||
       \/
    ----o----x

       [2    3]
    ```
    - git will checkout the (median -1) commit
    - verify it's good
    - commit boundary narrows down to [3] => bad commit = 3

    ### Post process

    reset bisecting process to restore back to normal
    </details>
</details>
