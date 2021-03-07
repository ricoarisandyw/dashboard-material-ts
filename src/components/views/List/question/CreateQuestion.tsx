import React, { useCallback, useRef } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Grid,
  Button,
} from "@material-ui/core";
import MathView, { MathViewRef } from 'react-math-view';

export default function CreateQuestion() {
  const ref = useRef<MathViewRef>(null);
  const toggleKeyboard = useCallback(() => ref.current?.executeCommand('toggleVirtualKeyboard'), [ref]);
  const getSpokenValue = useCallback(() => ref.current?.getValue('spoken'), [ref]);
  const hideKeyboard = useCallback(() => ref.current?.executeCommand('hideVirtualKeyboard'), [ref])

  return (
    <Grid xs={12}>
      <h4>Create Question</h4>
      <FormControl style={{ width: "100%" }}>
        <InputLabel htmlFor="my-input">Question</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
      </FormControl>
      <div>
        <label>Formula</label>
        <MathView
            value="x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}"
            ref={ref}
            onFocus={toggleKeyboard}
            onBlur={hideKeyboard}
        />
      </div>
      <Button style={{ marginTop: "1rem" }} variant="contained" color="primary">
        Create
      </Button>
    </Grid>
  );
}
